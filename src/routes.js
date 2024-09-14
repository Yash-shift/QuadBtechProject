app.get('/hodldata', async (req, res) => {
    try {
      const hodlData = await HodlData.find();
      res.json(hodlData);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });