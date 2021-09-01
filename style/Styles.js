import Colors from "./Colors";

const header = ({
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.colorWhite,
    height: 50,
    paddingEnd: 15,
  },
  backArrow: {
    paddingStart: 15,
    paddingEnd: 10,
  },
  headerIcon: {
    width: 20,
    height: 20,
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
  mb2: {
    marginBottom: 20,
  },
  ml1: {
    marginStart: 10,
  },
  my1: {
    marginVertical: 10,
  },
  my2: {
    marginVertical: 20,
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

export default {
  header,
  flex,
  screen,
  content,
  space,
  input,
};
