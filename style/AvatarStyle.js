import Colors from "./Colors";

const avatar = ({
  avatar: {
    width: 70,
    height: 70,
    backgroundColor: Colors.primaryLight,
    borderWidth: 1,
    borderColor: Colors.primaryLight,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    overflow: "hidden"
  },
  avatarImage: {
    width: 70,
    height: 70,
  },
  avatarIcon: {
    tintColor: Colors.primary,
    width: 50,
  },
  border: {
    borderColor: Colors.primaryBorder,
  },
  round: {
    borderRadius: 70,
  },
});

export default {
  avatar,
};
