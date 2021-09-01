import Colors from "./Colors";

const modal = ({
  modalCard: {
    backgroundColor: Colors.colorWhite,
    borderRadius: 5,
    overflow: "hidden",
  },
  iconCard: {
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  successCard:{
    backgroundColor: Colors.success,
  },
  errorCard:{
    backgroundColor: Colors.danger,
  },
  icon: {
    width: 34,
    height: 34,
    tintColor: Colors.colorWhite,
  },
  contentCard: {
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  title: {
    fontSize: 18,
    color: Colors.dark,
    textAlign: "center",
  },
  content: {
    fontSize: 16,
    color: Colors.dark,
    textAlign: "center",
  },
});

export default {
  modal,
};
