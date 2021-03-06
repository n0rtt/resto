const initialState = {
    menu: [],
    loading: true,
    error: false,
    items: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false
            }

        case 'MENU_REQUESTED':
            return {
                ...state,
                menu: state.menu,
                loading: true
            }

        case 'MENU_ERROR':
            return {
                ...state,
                menu: [],
                loading: false,
                error: true
            }

        case 'ITEM_ADD_TO_CART':

            let newItems = {}

            const id = action.payload
            const itemIndex = state.items.findIndex(item => item.id === id)

            if (itemIndex !== -1) {

                newItems = state.items.slice()
                newItems[itemIndex].quantity++

            } else {

                const item = state.menu.find(item => item.id === id)

                const newItem = {
                    id: item.id,
                    url: item.url,
                    title: item.title,
                    price: item.price,
                    quantity: 1
                }

                newItems = [
                    ...state.items,
                    newItem
                ]
            }

            return {
                ...state,
                items: newItems
            }

        case 'ITEM_REMOVE_FROM_CART':

            const indexToRemove = action.payload
            const itemsLeft = state.items.filter(item => item.id !== indexToRemove)

            return {
                ...state,
                items: itemsLeft
            }

        default:
            return state
    }
}

export default reducer