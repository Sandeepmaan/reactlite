import Colors from "./Colors";

const button = ({
  button: {
    height: 44,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  themeButton: {
    width: "100%",
    borderRadius: 5,
    backgroundColor: Colors.themeColor2,
  },
  primaryFullButton: {
    width: "100%",
    borderRadius: 5,
    backgroundColor: Colors.primary,
  },
  secondaryFullButton: {
    width: "100%",
    borderRadius: 5,
    backgroundColor: Colors.secondary,
  },
  successFullButton: {
    width: "100%",
    borderRadius: 5,
    backgroundColor: Colors.success,
  },
  warningFullButton: {
    width: "100%",
    borderRadius: 5,
    backgroundColor: Colors.warning,
  },
  lightFullButton: {
    width: "100%",
    borderRadius: 5,
    backgroundColor: Colors.light,
  },
  infoFullButton: {
    width: "100%",
    borderRadius: 5,
    backgroundColor: Colors.info,
  },
  darkFullButton: {
    width: "100%",
    borderRadius: 5,
    backgroundColor: Colors.dark,
  },
  borderFullButton: {
    width: "100%",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.light,
    backgroundColor: Colors.colorWhite,
  },
  fullButton: {
    width: "100%",
    borderRadius: 5,
    backgroundColor: Colors.primary,
  },


  smallButton: {
    maxWidth: 200,
    paddingHorizontal: 30,
    borderRadius: 5,
    backgroundColor: Colors.primary,
    marginVertical: 5,
  },
  smallBorderButton: {
    maxWidth: 200,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: Colors.defaultBorder,
  },
  textLight: {
    color: Colors.colorWhite,
    fontSize: 16,
  },
  textDark: {
    color: Colors.dark,
    fontSize: 16,
  },
});

export default {
  button,
};
