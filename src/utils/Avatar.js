function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

export function stringAvatar(name) {
  const nameParts = name ? name.split(" ") : " ";
  let avatarText = "";

  if (nameParts.length >= 1) {
    avatarText += nameParts[0][0]; // First letter of the first word

    if (nameParts.length >= 2 && nameParts[1].length > 1) {
      avatarText += nameParts[1][0]; // Second letter of the second word
    }
  }

  return {
    sx: {
      bgcolor: name ? stringToColor(name) : "rgba(255,255,255,0.8)",
    },
    children: avatarText,
  };
}
