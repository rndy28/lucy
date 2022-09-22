import SimpleIcons from "simple-icons";

export default function getIcon(slug: string) {
  const icon = SimpleIcons.Get(slug).svg;
  return icon;
}
