export const getAllInformations = (req, res) => {
    res.json(infors).status(200);
};

export const getInformation = (req, res) => {
    const { phoneNumber } = req.body.phoneNumber;

    if (!phoneNumber) return res.json({ message: "Id is required" }).status(400);

    const note = infors.find((note) => note.phoneNumber == phoneNumber);

    return res.json({ note }).status(200);
};


export const createInformation = (req, res) => {
    const { name } = req.body;
    console.log(name, req.body);

    if (!name) return res.json({ message: "Name is required" }).status(400);

    const newInformation = {
        id: uuidv4(),
        name,
    };

    infors.push(newInformation);

    return res.json({ infors }).status(201);
};

export const updateInformation = (req, res) => {
    const { name } = req.body;
    const { id } = req.params;

    if (!name) return res.json({ message: "Name is required" }).status(400);
    if (!id) return res.json({ message: "Id is required" }).status(400);

    const note = infors.find((note) => note.id == id);
    note.name = name;

    return res.json({ note }).status(200);
};

export const deleteInformation = (req, res) => {
    const { id } = req.params;

    if (!id) return res.json({ message: "Id is required" }).status(400);

    infors = infors.filter((note) => note.id != id);

    return res.json({ infors }).status(200);
};

export const searchInformation = (req, res) => {
    const { name } = req.query;

    const note = infors.filter((note) => note.name.toLowerCase().includes(name.toLowerCase()));

    return res.json({ note }).status(200);
};
