import Colors from "./Colors";

const header = ({
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.colorWhite,
    height: 50,
    paddingEnd: 15,
  },
  headerLeft: {
    width: 100,
  },
  headerRight: {
    width: 100,
  },
  backArrow: {
    paddingStart: 15,
    paddingEnd: 10,
  },
  RightArrow: {
    paddingEnd: 10,
  },
  headerIcon: {
    width: 20,
    height: 20,
  },


  heading: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.colorWhite,
    height: 50,
  },
});

const logo = ({
  logo: {
    width: 100,
    height: 100,
  },
});
const flex = ({
  flex0: {
    flex: 0,
  },
  flex1: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
  },
  justifyStart: {
    justifyContent: "flex-start",
  },
  justifyEnd: {
    justifyContent: "flex-end",
  },
  justifyCenter: {
    justifyContent: "center",
  },
  justifySpace: {
    justifyContent: "space-between",
  },
  alignStart: {
    alignItems: "flex-start",
  },
  alignCenter: {
    alignItems: "center",
  },
  alignEnd: {
    alignItems: "flex-end",
  },
  centerBoth: {
    justifyContent: "center",
    alignItems: "center",
  },
});

const screen = ({
  initialPage: {
    flex: 1,
    backgroundColor: Colors.colorWhite,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  defaultScreen: {
    flex: 1,
    backgroundColor: Colors.colorWhite,
  },
});

const icon = ({
  icon20: {
    width: 20,
    height: 20,
  },
  icon30: {
    width: 30,
    header: 30,
  },
});

const content = ({
  textLight: {
    fontSize: 12,
    letterSpacing: .4,
    fontFamily: "goregular",
  },
  textRegular: {
    fontSize: 14,
    letterSpacing: .4,
    fontFamily: "goregular",
  },
  textMedium: {
    fontSize: 16,
    letterSpacing: .4,
    fontFamily: "goregular",
  },
  textLarge: {
    fontSize: 20,
    letterSpacing: .4,
    fontFamily: "goregular",
  },
  textCenter: {
    textAlign: "center",
    fontFamily: "goregular",
  },
  textColorWhite: {
    color: Colors.colorWhite,
  },
  textColorBlack: {
    color: Colors.colorBlack,
  },
  textColorLight: {
    color: Colors.defaultBorder,
  },
});

const fonts = ({
  fontRegular: {
    fontFamily: "goregular2",
  },
  fontThin: {
    fontFamily: "gothin",
  },
  fontThick: {
    fontFamily: "gothick",
  },
  fontMedium: {
    fontFamily: "gomedium",
  },
});

const space = ({
  mt1: {
    marginTop: 10,
  },
  mt2: {
    marginTop: 20,
  },
  mt3: {
    marginTop: 30,
  },
  mt4: {
    marginTop: 40,
  },
  mt5: {
    marginTop: 50,
  },
  mb1: {
    marginBottom: 10,
  },
  mb2: {
    marginBottom: 20,
  },
  mb3: {
    marginBottom: 30,
  },
  mb4: {
    marginBottom: 40,
  },
  mb5: {
    marginBottom: 50,
  },
  ml1: {
    marginStart: 10,
  },
  ml2: {
    marginStart: 20,
  },
  ml3: {
    marginStart: 30,
  },
  ml4: {
    marginStart: 40,
  },
  ml5: {
    marginStart: 50,
  },
  mr1: {
    marginEnd: 10,
  },
  mr2: {
    marginEnd: 20,
  },
  mr3: {
    marginEnd: 30,
  },
  mr4: {
    marginEnd: 40,
  },
  mr5: {
    marginEnd: 50,
  },
  mx1: {
    marginHorizontal: 10,
  },
  mx2: {
    marginHorizontal: 20,
  },
  mx3: {
    marginHorizontal: 30,
  },
  mx4: {
    marginHorizontal: 40,
  },
  mx5: {
    marginHorizontal: 50,
  },
  my1: {
    marginVertical: 10,
  },
  my2: {
    marginVertical: 20,
  },
  my3: {
    marginVertical: 30,
  },
  my4: {
    marginVertical: 40,
  },
  my5: {
    marginVertical: 50,
  },


  pt1: {
    paddingTop: 10,
  },
  pt2: {
    paddingTop: 20,
  },
  pt3: {
    paddingTop: 30,
  },
  pt4: {
    paddingTop: 40,
  },
  pt5: {
    paddingTop: 50,
  },
  pb1: {
    paddingBottom: 10,
  },
  pb2: {
    paddingBottom: 20,
  },
  pb3: {
    paddingBottom: 30,
  },
  pb4: {
    paddingBottom: 40,
  },
  pb5: {
    paddingBottom: 50,
  },
  pl1: {
    paddingStart: 10,
  },
  pl2: {
    paddingStart: 20,
  },
  pl3: {
    paddingStart: 30,
  },
  pl4: {
    paddingStart: 40,
  },
  pl5: {
    paddingStart: 50,
  },
  pr1: {
    paddingEnd: 10,
  },
  pr2: {
    paddingEnd: 20,
  },
  pr3: {
    paddingEnd: 30,
  },
  pr4: {
    paddingEnd: 40,
  },
  pr5: {
    paddingEnd: 50,
  },
  px1: {
    paddingHorizontal: 10,
  },
  px2: {
    paddingHorizontal: 20,
  },
  px3: {
    paddingHorizontal: 30,
  },
  px4: {
    paddingHorizontal: 40,
  },
  px5: {
    paddingHorizontal: 50,
  },
  py1: {
    paddingVertical: 10,
  },
  py2: {
    paddingVertical: 20,
  },
  py3: {
    paddingVertical: 30,
  },
  py4: {
    paddingVertical: 40,
  },
  py5: {
    paddingVertical: 50,
  },


  px15: {
    paddingHorizontal: 15,
  },
});

const input = ({
  defaultInput: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: Colors.primaryBorder,
    borderRadius: 4,
    paddingHorizontal: 15,
  },
});

const divider = ({
  divider: {
    flex: 1,
  },
});

const qrScanner = ({
  qrScanner: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.Transparent40,
  },
  qrOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 50,
    bottom: 100,
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "center",
  },
  findScanButton: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: Colors.TransparentDark60,
    borderRadius: 10,
  },
  torchButton: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.TransparentDark60,
    borderRadius: 50,
  },
  qrScanIcon: {
    width: 200,
    height: 200,
    tintColor: Colors.colorWhite,
  },
  torchIcon: {
    width: 20,
    height: 20,
    tintColor: Colors.colorWhite,
  },
});

export default {
  header,
  logo,
  flex,
  screen,
  content,
  space,
  input,
  icon,
  divider,
  qrScanner,
};
