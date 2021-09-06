import Colors from "./Colors";

const tabs = ({
  activeTab: {
    backgroundColor: Colors.colorWhite,
    position: "absolute",
    left: 0,
    top: -5,
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderTopColor: "rgba(233,233,233,0.46)",
    borderTopWidth: 2,
  },
  activeBorder: {
    width: 40,
    height: 4,
    backgroundColor: Colors.themeColor2,
    borderBottomStartRadius: 4,
    borderBottomEndRadius: 4,
    top: -8,
  },
  inActiveBorder: {
    width: 40,
    height: 4,
    backgroundColor: Colors.colorWhite,
    borderBottomStartRadius: 4,
    borderBottomEndRadius: 4,
    top: -8,
  },
  activeTabtext: {
    color: Colors.themeColor2,
    fontSize: 14,
    marginBottom: 5,
  },
  inActiveTab: {
    backgroundColor: Colors.colorWhite,
    position: "absolute",
    left: 0,
    top: -5,
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderTopColor: "rgba(233,233,233,0.46)",
    borderTopWidth: 2,
  },
  inActiveTabtext: {
    color: Colors.themeColor1,
    fontSize: 14,
    marginBottom: 5,
  },
  activeIcon: {
    width: 16,
    height: 16,
    marginBottom: 5,
    tintColor: Colors.themeColor2,
  },
  inactiveIcon: {
    width: 16,
    height: 16,
    marginBottom: 5,
    tintColor: Colors.themeColor1,
  },
  count: {
    position: "absolute",
    right: 22,
    top: 4,
    width: 16,
    height: 16,
    backgroundColor: Colors.themeColor2,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default {
  tabs,
};
