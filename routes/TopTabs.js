import * as React from 'react';
import {StyleSheet, Dimensions, Text} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';
import Colors from '../style/Colors';
import Styles from '../style/Styles';
import OrderList from '../screens/chatApp/orders/components/OrderList';

const content = Styles.content;
const space = Styles.space;

export default class MyOrders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            routes: [
                {
                    key: 'recent',
                    title: 'Recent Orders',
                },
                {
                    key: 'previous',
                    title: 'Previous Orders',
                },
            ],
        };
    }

    renderScene = ({route}) => {
        switch (route.key) {
            case 'recent':
                return <PreviousOrderList onPress={this.props.onPress}/>;
            case 'previous':
                return <PreviousOrderList onPress={this.props.onPress}/>;
        }
    };

    state;
    _renderLabel = (index) => {
        return (
            <Text style={[content.darkMedium, content.fwMedium, space.py1]}>
                {index.route.title}
            </Text>
        );
    };

    render() {
        return (
            <TabView
                navigationState={this.state}
                renderScene={this.renderScene}
                onIndexChange={index => this.setState({index})}
                initialLayout={{
                    width: Dimensions.get('window').width,
                }}
                renderTabBar={props =>
                    <TabBar
                        {...props}
                        activeColor={Colors.greenColor}
                        inactiveColor={Colors.tabColor}
                        labelStyle={{color: Colors.darkText, backgroundColor: Colors.tabColor}}
                        indicatorStyle={{
                            backgroundColor: Colors.selectedTabs,
                            borderRadius: 4,
                            height: '100%',
                            borderBottomWidth: 2,
                            borderBottomColor: Colors.blueColor,
                        }}
                        style={[{marginHorizontal: 15, backgroundColor: Colors.tabColor, borderRadius: 5}]}
                        renderLabel={this._renderLabel}
                    />
                }
            />
        );
    }
}

const styles = StyleSheet.create({});
