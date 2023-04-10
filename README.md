# @nulogy/icons

> This is a collection of Material Icons that are used by Nulogy applications. This package is already imported into the `<Icon />` component of the [@nulogy/components](https://github.com/nulogy/design-system/tree/master/components), and the icons here can be chosen with the `icon` prop.

![npm (scoped)](https://img.shields.io/npm/v/@nulogy/css.svg)

## 📦 Installation

If you don't have access to the React component, you can install these directly:

`$ yarn add @nulogy/icons`

They can then be used in your application like any other `.svg`.

## ➕ Adding a new icon

Prerequisites:
- Node.js using the version in `.nvmrc`
- Yarn

To find and add a new icon:

1. Search [Material Icons](https://material.io/resources/icons/) for the icon you need
2. In Figma, use the Material Design Icons plugin to add the icon to a document. Export the icon as SVG
3. Clone this repo (`git clone https://github.com/nulogy/nds-icons.git`)
4. Install dependencies by running `yarn`
5. Place SVG in `assets/` folder with the desired icon name (in camelCase)
6. run `yarn && yarn build` to make the icon available to use
7. Commit the changes using a [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) message
8. Submit PR

## 💬 Questions

- [#design-system](slack://channel?team=T024N2KKA&id=CBAFQ4X7X)
