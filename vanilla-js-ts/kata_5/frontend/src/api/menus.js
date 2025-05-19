const BASE_URL = import.meta.env.VITE_BASE_URL;

const routes = {
    all: '/menu',
    id: '/menu?id=',
    create: '/menu/create',
    update: '/menu/update',
    delete: '/menu/delete'
};

export const fetchMenus = async (id = null) => {
    try {
        let url;
        if (id) {
            url = `${BASE_URL}${routes.id}${id}`;
        } else {
            url = `${BASE_URL}${routes.all}`;
        }

        const response = await fetch(url);
        console.log(response);
        
        if (!response.ok) {
            return new Error('Erreur API');
        }
        const data = await response.json();
        console.log(data);
        
        return data;

    } catch (error) {
        console.error(error);
    }
};