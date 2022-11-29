const saveToSessionStorage = async (key: string, value: any | string | boolean) => {
    window.sessionStorage.setItem(key, value);
}

const getFromSessionStorage = (key: string) => {
    return window.sessionStorage.getItem(key) || '';
}

const removeFromSessionStorage = async (key: string) => {
    window.sessionStorage.removeItem(key)
}

const clearSessionStorage = async () => {
    window.sessionStorage.clear()
}

export {
    saveToSessionStorage,
    getFromSessionStorage,
    removeFromSessionStorage,
    clearSessionStorage
}