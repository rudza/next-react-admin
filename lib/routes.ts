export const routes = {
  home: `/`,
  admin: `/admin`,
}

export const isActive = (asPath: string, href: string) => href === "/" ? asPath === href : asPath.includes(href)
