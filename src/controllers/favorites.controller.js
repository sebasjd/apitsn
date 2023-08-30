import Favorite from '../models/favorite.model.js'

export const getFavorites = async (req, res) => {
  const favorites = await Favorite.find({
    user: req.user.id,
  }).populate('user');

  res.json(favorites);
};

export const addFavorite = async (req, res) => {
  const { img, title } = req.body;

  const newFavorite = new Favorite({
    favNewId: req.params.id,
    img,
    title,
    user: req.user.id,
  });
  const savedFavorite = await newFavorite.save();
  res.json(savedFavorite);
};

export const deleteFavorite = async (req, res) => {
const favorite = await Favorite.findByIdAndDelete(req.params.id);

if (!favorite) return res.status(404).json({ message: 'Item not found' });

res.status(204);
};
