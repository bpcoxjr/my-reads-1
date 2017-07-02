export const camelCaseToTitleCase = (camelCaseString) => {
  let spaceString = camelCaseString.replace( /([A-Z])/g, " $1" )
  return spaceString.charAt(0).toUpperCase() + spaceString.slice(1)
}
