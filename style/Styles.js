import Colors from "./Colors";

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

const content = ({
  textLight: {
    fontSize: 12,
    letterSpacing: .4,
  },
  textRegular: {
    fontSize: 14,
    letterSpacing: .4,
  },
  textMedium: {
    fontSize: 16,
    letterSpacing: .4,
  },
  textLarge: {
    fontSize: 20,
    letterSpacing: .4,
  },
});

const space = ({
  mt1: {
    marginTop: 10,
  },
  mb1: {
    marginBottom: 10,
  },
  ml1: {
    marginStart: 10,
  },
  my1: {
    marginVertical: 10,
  },
  px15: {
    paddingHorizontal: 15,
  },
});


const button = ({
  fullButton: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: Colors.primary,
    marginVertical: 5,
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

export default {
  flex,
  screen,
  content,
  space,
  button,
  input,
};
