export default {
    name: 'product',
    title: 'Producto',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Nombre',
            type: 'string'
        },
        {
            name: 'image',
            Title: 'Imagen',
            type: 'array',
            of: [{type: 'image'}],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'slug',
            title: 'ID',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name: 'price',
            title: 'Precio',
            type: 'number'
        },
        {
            name: 'details',
            title: 'Detalles',
            type: 'string'
        }
    ]
}