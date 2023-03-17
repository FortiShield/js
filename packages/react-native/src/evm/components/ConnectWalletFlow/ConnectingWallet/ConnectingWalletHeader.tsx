import { Icon } from "../../../assets/icon";
import { useAppTheme } from "../../../styles/hooks";
import Text from "../../base/Text";
import { ReactNode } from "react";
import { Image, StyleSheet, View } from "react-native";

interface ConnectWalletHeaderProps {
  close: () => void;
  onBackPress: () => void;
  walletLogoUrl: string;
  subHeaderText?: ReactNode | string;
}

export const ConnectWalletHeader = ({
  subHeaderText = "Connecting your wallet",
  walletLogoUrl,
  close,
  onBackPress,
}: ConnectWalletHeaderProps) => {
  const theme = useAppTheme();
  return (
    <>
      <View style={styles.header}>
        <Icon
          type="back"
          size={14}
          onPress={onBackPress}
          color={theme.colors.iconPrimary}
        />
        <Image
          alt="wallet logo"
          style={styles.walletLogo}
          source={{ uri: walletLogoUrl }}
        />
        <Icon
          type="close"
          size={14}
          onPress={close}
          color={theme.colors.iconPrimary}
        />
      </View>
      <View style={styles.subHeader}>
        {typeof subHeaderText === "string" ? (
          <Text variant="subHeader">{subHeaderText}</Text>
        ) : (
          subHeaderText
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 24,
  },
  walletLogo: {
    width: 56,
    height: 56,
  },
});
