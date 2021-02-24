export const usersHelpers = (itemId, items, togler, objPropName) => {
   return  items.map(u => {
        if (u[objPropName] === itemId) {
            return {...u, ...togler}
        }
        return u;
    })
}