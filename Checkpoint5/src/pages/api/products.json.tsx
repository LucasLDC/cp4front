import productData from './products.json';

export default function handler(req, res) {
    res.status(200).json(productData);
}
