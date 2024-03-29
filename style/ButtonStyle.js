import Colors from "./Colors";

const diameter = 100;

const button = ({
  ripple: {
    color: Colors.defaultBorder,
    borderless: false,
    borderRadius: 0,
  },
  listRipple: {
    color: Colors.defaultBorder,
    borderless: false,
    borderRadius: 0,
  },
  button: {
    height: 44,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 5,
    overflow: "hidden",
  },

  themeButton: {
    width: "100%",
    borderRadius: 4,
    backgroundColor: Colors.chatTheme,
  },
  rechargeButton:{
    width: "100%",
    borderRadius: 4,
    backgroundColor: Colors.rechargeTheme,
  },

  primaryFullButton: {
    width: "100%",
    borderRadius: 5,
    backgroundColor: Colors.primary,
  },
  secondaryFullButton: {
    width: "100%",
    borderRadius: 4,
    backgroundColor: Colors.secondary,
  },
  successFullButton: {
    width: "100%",
    borderRadius: 4,
    backgroundColor: Colors.success,
  },
  warningFullButton: {
    width: "100%",
    borderRadius: 4,
    backgroundColor: Colors.warning,
  },
  lightFullButton: {
    width: "100%",
    borderRadius: 4,
    backgroundColor: Colors.light,
  },
  infoFullButton: {
    width: "100%",
    borderRadius: 4,
    backgroundColor: Colors.info,
  },
  darkFullButton: {
    width: "100%",
    borderRadius: 4,
    backgroundColor: Colors.dark,
  },
  borderFullButton: {
    width: "100%",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.light,
    backgroundColor: Colors.colorWhite,
  },
  fullButton: {
    width: "100%",
    borderRadius: 4,
    backgroundColor: Colors.primary,
  },
  smallButton: {
    maxWidth: 250,
    paddingHorizontal: 30,
    borderRadius: 4,
    backgroundColor: Colors.primary,
    marginVertical: 5,
  },
  smallBorderButton: {
    maxWidth: 250,
    paddingHorizontal: 30,
    borderRadius: 4,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: Colors.defaultBorder,
  },
  textLight: {
    color: Colors.colorWhite,
    fontSize: 16,
    fontFamily: "goregular",
  },
  textDark: {
    color: Colors.dark,
    fontSize: 16,
    fontFamily: "goregular",
  },
  inputButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    position: "absolute",
    right: 0,
    bottom: 10,
    borderRadius: 4,
  },
});

export default {
  button,
};
