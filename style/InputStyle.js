import Colors from "./Colors";

const input = ({
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    paddingHorizontal: 15,
    color: Colors.dark,
    fontFamily: "goregular",
  },

  defaultInput: {
    borderColor: Colors.defaultBorder,
    borderRadius: 4,
  },
  labelInput: {
    borderColor: Colors.defaultBorder,
    borderRadius: 4,
  },
  iconInput: {
    borderColor: Colors.defaultBorder,
    borderRadius: 4,
    paddingStart: 50,
  },
  withoutBorder: {
    backgroundColor: Colors.defaultBorder,
    borderColor: Colors.defaultBorder,
    borderRadius: 4,
  },
  borderBottom: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderColor: Colors.defaultBorder,
    borderRadius: 0,
    paddingHorizontal: 0,
  },
  inputError: {
    fontSize: 14,
    color: Colors.danger,
  },
  inputIcon: {
    position: "absolute",
    left: 15,
    top: 13,
    width: 24,
    height: 24,
    tintColor: Colors.defaultBorder,
    zIndex: 9,
  },
  messageInput: {
    backgroundColor: Colors.colorWhite,
    borderWidth: 0,
    borderTopWidth: 1,
    borderTopColor: Colors.defaultBorder,
  },
  sendIconButton: {
    width: 40,
    height: 40,
    backgroundColor: Colors.chatTheme,
    position: "absolute",
    top: 5,
    right: 10,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  sendIcon: {
    width: 20,
    height: 20,
    tintColor: Colors.colorWhite,
  },
  otpInput: {
    // backgroundColor: Colors.light,
    borderColor: Colors.defaultBorder,
    borderBottomWidth: 1,
    borderRadius: 0,
    color: Colors.dark,
    height: 60,
    textAlign: "center",
    fontSize: 20,
    marginBottom: 20,
  },


  chatSearchInput: {
    backgroundColor: Colors.primaryLight,
    borderWidth: 0,
  },
  sendMoneyInput: {
    width: "100%",
    height: 100,
    fontSize: 40,
    textAlign: "center",
    borderWidth: 0,
  },
});

export default {
  input,
};
