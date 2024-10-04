# @nulogy/icons

> This is a collection of Material Icons that are used by Nulogy applications. This package is already imported into the `<Icon />` component of the [@nulogy/components](https://github.com/nulogy/design-system/tree/master/components), and the icons here can be chosen with the `icon` prop.

![npm (scoped)](https://img.shields.io/npm/v/@nulogy/css.svg)

## 📦 Installation

If you don't have access to the React component, you can install these directly:

`$ yarn add @nulogy/icons`

They can then be used in your application like any other `.svg`.

## ➕ Adding a new icon

To find and add a new icon:

1. Search [Material Icons](https://material.io/resources/icons/) for the icon you need and download it. Alternatively, in Figma, use the Material Design Icons plugin to add the icon to a page then export the icon as SVG
2. Add the icon to the NDS design system `Icons` page in [Figma](https://www.figma.com/design/IH4gk9P2E4xEYiNKoD22Jd/NDS-v1?node-id=113-851)
3. Clone this repo (`git clone git@github.com:nulogy/nds-icons.git`)
4. Place SVG in `assets/` folder with the desired icon name (in camelCase). The name of the icon should match the icon's name in Figma. Consult with the designer what the desired name should be, otherwise use the name provided in Material Icons
5. Commit the changes using a [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) message
6. Submit PR

## 💬 Questions

- [#design-system](slack://channel?team=T024N2KKA&id=CBAFQ4X7X)
