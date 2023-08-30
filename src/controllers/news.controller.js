import New from '../models/new.model.js'

export const getNews = async (req, res) => {
  const news = await New.find();

  res.json(news);
};

export const addNew = async (req, res) => {
  const { img, title, paragraph, text } = req.body;

  const newNew= new New({
    favNewId: req.params.id,
    img,
    title,
    paragraph,
    text,
    // user: req.user.id,
  });
  const savedNew = await newNew.save();
  res.json(savedNew);
};

export const deleteNew = async (req, res) => {
const news = await New.findByIdAndDelete(req.params.id);

if (!news) return res.status(404).json({ message: 'Item not found' });

res.status(204);
};
