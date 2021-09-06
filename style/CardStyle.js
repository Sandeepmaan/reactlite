import Colors from "./Colors";

const card = ({
  card: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.defaultBorder,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  squareCard: {
    flex: 0,
    width: '50%',
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
  },
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  iconBox: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginEnd: 10,
    backgroundColor: Colors.themeColor2,
    justifyContent: "center",
    alignItems: "center",
  },
  rightIconBox: {
    width: 30,
    height: 30,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  cardIcon: {
    width: 18,
    height: 18,
  },
  title: {
    fontSize: 18,
    color: Colors.dark,
  },
  detail: {
    fontSize: 14,
    color: Colors.dark,
    lineHeight: 18,
    marginVertical: 10,
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: Colors.themeColor2,
    alignSelf: "flex-end",
    borderRadius: 5,
  },
  badgeText: {
    fontSize: 12,
    color: Colors.colorWhite,
  },
});

export default {
  card,
};
