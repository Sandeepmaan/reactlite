import Colors from "./Colors";

const avatar = ({
  avatar: {
    width: 50,
    height: 50,
    backgroundColor: Colors.primaryLight,
    borderWidth: 1,
    borderColor: Colors.primaryLight,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    overflow: "hidden",
  },
  avatar100: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  avatarActive: {
    width: 15,
    height: 15,
    borderRadius: 15,
    backgroundColor: Colors.chatTheme,
    position: "absolute",
    right: 5,
    bottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarActiveIcon: {
    width: 10,
    height: 10,
    tintColor: Colors.colorWhite,
  },
  avatarImage: {
    width: 50,
    height: 50,
  },
  avatarIcon: {
    tintColor: Colors.primary,
    width: 50,
  },
  border: {
    borderColor: Colors.primaryBorder,
  },
  round: {
    borderRadius: 50,
  },
});

export default {
  avatar,
};
