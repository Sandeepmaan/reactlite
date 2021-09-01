import Colors from "./Colors";

const input = ({
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    paddingHorizontal: 15,
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
    backgroundColor: Colors.dark,
    borderColor: Colors.dark,
    borderRadius: 4,
  },
  borderBottom: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottom: 1,
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
  },
});

export default {
  input,
};
