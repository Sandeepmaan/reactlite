import * as React from 'react';
import {ScrollView, StyleSheet, Text, StatusBar, View, BackHandler, RefreshControl,} from 'react-native';
import {setFields, setBrands, clearFilters, selectBrands, selectCategory, selectSubCategory, filterQuery}
    from '../../../store/actions/actions-filter';
import Styles from '../../../style/Styles';
import MainHeader from '../../components/header/MainHeader';
import Colors from '../../../style/Colors';
import OfferList from './components/OfferList';
import CategoriesCol from './components/CategoriesCol';
import {useSelector, useDispatch} from 'react-redux';
import LoadingHome from '../../components/loading/LoadingHome';
import {Translator} from '../../../helper/Translator';
import {useEffect} from 'react';
import {initialService} from '../../../app/services/service-initial';
import BrandsList from '../brand/homeBrandList/BrandsList';
import AdBanner from "./components/AdBanner";
import HomeSearch from "./homeSearch/HomeSearch";
import {SET_CATEGORIES, SET_SUB_CATEGORIES} from "../../../store/action-types/action-types";
import SearchView from "./homeSearch/SearchView";
import GridBanner from "./components/GridBanner";

/* useBackButton */
export const useBackButton = (handler) => {
    // Frustration isolated! Yay! 🎉
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", handler);
        return () => {
            BackHandler.removeEventListener(
                "hardwareBackPress",
                handler
            );
        };
    }, [handler]);
}

const Home = (props) => {
    const {user, filter, category, market} = useSelector(state => state);
    const [allLoaded, setAllLoaded] = React.useState(false);
    const [categoryLoading, setCategoryLoading] = React.useState(false);
    const [promotions, setPromotions] = React.useState([]);
    const [banners, setBanners] = React.useState([]);
    const [categories, setCategories] = React.useState(category.categories ? category.categories : []);
    const flex = Styles.flex;
    const content = Styles.content;
    const space = Styles.space;
    const screen = Styles.screen;
    const {navigate} = props.navigation;
    const dispatch = useDispatch();
    const [rootkey, setRootkey] = React.useState(Math.random());
    const [refreshing, setRefreshing] = React.useState(false);

    React.useEffect(() => {
        getPromotions();
        getFieldsData();
        getBrands();
    },[])

    // React.useEffect(() => {
    //     return resetLoader();
    // }, [user]);

    const resetLoader = () => {
        setAllLoaded(false);
        //console.log('Getting called for reload');
        setRootkey(Math.random());
    }

    const onRefresh = React.useCallback(() => {
        getFieldsData();
        getPromotions();
        getBrands();
    }, []);

    const getFieldsData = () => {
        dispatch(setFields());
        setCategoryLoading(true);
        let query = filterQuery(filter);

        initialService.getParentCategories(query)
            .then((category_data) => {
                let sub_categories = [];
                category_data.map((item) => {
                    sub_categories.concat(item.sub);
                });

                setCategories(category_data);
                setAllLoaded(true);
                dispatch({
                    type: SET_CATEGORIES,
                    categories: category_data,
                });
                dispatch({
                    type: SET_SUB_CATEGORIES,
                    sub_categories: sub_categories,
                });

                return category_data;
            }).catch((err) => console.log(err));
    };

    const getPromotions = () => {
        initialService.getPromotions()
            .then((res) => {
                const sliders = res.filter((item) => item.promotion_type === 'slider');
                setPromotions(sliders);
                const banner_set = res.filter((item) => item.promotion_type === 'banner');
                setBanners(banner_set);
            }).catch((err) => {
        });
    }

    const getBrands = () => {
        dispatch(setBrands());
    }

    const getFeaturedBrands = () => {
        return filter.brands.filter((item) => item.featured);
    }


    const getBanner = (num) => {
        return banners.filter((item) => item.number === num);
    }

    const openBanner = (bannerData) => {
        let parameters = {};

        try {
            parameters = bannerData.parameters !== '' ? JSON.parse(bannerData.parameters) : {};
        } catch (objError) {
            parameters = {};
        }
        if (bannerData.open_in === 'app') {
            if (bannerData.link !== '') {
                navigate(bannerData.link, parameters);
            }
        }
    }

    const selectCat = (category) => {
        dispatch(selectCategory(category.id)).then((res) => {
            navigate('HomeSearch');
        });
    }

    const selectSubCat = (category) => {
        dispatch(selectSubCategory(category.id)).then((res) => {
            navigate('HomeSearch');
        });
    }


    const selectBrand = (brand) => {
        dispatch(selectBrands(brand.id)).then((res) => {
            navigate('HomeSearch');
        });
    }

    return (
        <>
            <StatusBar backgroundColor={Colors.whiteColor} barStyle="dark-content"/>

            {!allLoaded ?
                <View style={[screen.container, {backgroundColor: Colors.whiteColor}]}>
                    <LoadingHome/>
                </View>
                :
                <View style={[flex.flex1]}>
                <ScrollView refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                } stickyHeaderIndices={[1]} showsVerticalScrollIndicator={false} style={screen.container}>
                            <MainHeader
                                marginHeader={true}
                                logo="logo"
                                name={'SPACIUM STORE'}
                                border={true}
                                barcode={true}
                                onPressCode={() => navigate('ScanBarcode')}
                                borderColor={Colors.whiteColor}
                                location={user.selectedLocation ?
                                    user.selectedLocation.address
                                    :
                                    Translator.get("HOME_SELECT_LOCATION")
                                }
                                locationIcon={user.selectedLocation ?
                                    require('../../../assets/new/location_select.png')
                                    :
                                    require('../../../assets/new/location_unselect.png')
                                }
                                locateLink={() => user.currentUser.apiToken ?
                                    navigate('MyAddresses')
                                    :
                                    navigate('Login')
                                }
                            />

                            <View style={[{backgroundColor: Colors.whiteColor, paddingBottom: 4,}]}>
                                <View style={[space.px15,]}>
                                    <SearchView
                                        onPress={() => navigate('HomeSearch')}
                                    />
                                </View>
                            </View>

                            <View style={[space.mt1,]}>
                                <AdBanner
                                    small={true}
                                    onPress={openBanner}
                                    detail={getBanner(6)}
                                />
                            </View>

                            {promotions.length > 0 &&
                            <OfferList openBanner={openBanner} data={promotions}/>
                            }

                            <View style={[{paddingHorizontal: 4,}, screen.whiteCard]}>
                                <GridBanner
                                    onPress={openBanner}
                                    detail={getBanner(0)}
                                />
                            </View>

                            {/*Previous Order
                        <View>
                            <View style={[screen.pageHeading, space.mt1]}>
                                <Text style={[content.darkMedium, content.fwHeavy,]}>
                                    {Translator.get("PREVIOUS ORDER")}
                                </Text>
                            </View>
                            <PreviousOrder/>
                        </View>
                        */}

                    {/*Categories List*/}
                    <View style={[screen.pageHeading]}>
                        <Text style={[content.darkMedium, content.fwHeavy, {
                            lineHeight: 40,
                            textTransform: 'uppercase'
                        }]}>
                            {Translator.get("HOME_Categories_List")}
                        </Text>
                    </View>
                    <View style={[space.px15]}>
                        <CategoriesCol
                            data={categories}
                            onPress={(data) => selectCat(data)}
                        />
                    </View>

                    <View style={[space.mt1,]}>
                        <AdBanner
                            onPress={openBanner}
                            detail={getBanner(1)}
                        />
                    </View>

                    <View style={[space.mt1,]}>
                        <AdBanner
                            detail={getBanner(2)}
                        />
                    </View>

                    <View style={[{backgroundColor: Colors.whiteColor}, space.py1]}>
                        <BrandsList
                            limit={8}
                            onViewAll={() => navigate('Brands')}
                            data={getFeaturedBrands()}
                            onPress={(data) => selectBrand(data)}
                        />
                    </View>

                    <View>
                        <AdBanner
                            onPress={openBanner} detail={getBanner(3)}
                        />
                    </View>

                    <View style={[space.mt1,]}>
                        <AdBanner
                            onPress={openBanner}
                            detail={getBanner(4)}
                        />
                    </View>

                    <View style={[space.mt1,]}>
                        <AdBanner
                            onPress={openBanner}
                            detail={getBanner(5)}
                        />
                    </View>

                    {
                        categories.length > 0 &&
                        categories.map((cat, index) => {
                            if (cat.sub.length <= 0) {
                                return;
                            }
                            return (
                                <>
                                    <View style={[screen.pageHeading, space.mt1]}>
                                        <Text style={[content.darkMedium, content.fwHeavy, {
                                            textTransform: 'uppercase'
                                        }]}>
                                            {Translator.get(cat.name)}
                                        </Text>
                                    </View>
                                    <View style={[space.px15]}>
                                        <CategoriesCol
                                            category_banner={getBanner(cat.id)}
                                            data={cat.sub}
                                            onBannerPress={() => selectCat(cat)}
                                            onPress={(data) => selectSubCat(data)}
                                        />
                                    </View>
                                </>
                            )
                        })
                    }
                </ScrollView>
            </View>
            }
        </>
    )
}

export default Home;
