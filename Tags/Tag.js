import React from "react";
import PropTypes from "prop-types";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

const Tag = ({
  label,
  onPress,
  tagContainerStyle,
  tagTextStyle,
  readonly,
  hasDeleteIcon = true
}) => {
  const tagText = <Text style={[styles.tagLabel, tagTextStyle]}>{label}</Text>;

  if (readonly) {
    return <View style={[styles.tag, tagContainerStyle]}>{tagText}</View>;
  } else {
    return (
      <TouchableOpacity
        style={[styles.tag, tagContainerStyle]}
        onPress={onPress}
      >
        {"#" + tagText}
        {hasDeleteIcon && (
          <Ionicons
            size={14}
            name={"ios-close-circle-outline"}
            color={"rgba(0, 0, 0, 0.87)"}
            style={{ padding: 4 }}
          />
        )}
      </TouchableOpacity>
    );
  }
};

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  readonly: PropTypes.bool
};

export default Tag;
