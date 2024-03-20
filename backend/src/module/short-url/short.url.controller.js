import { ShortUrlServices } from "./short.url.services.js";

const shortUrlServices = new ShortUrlServices();

export async function getAllUrl(req, res) {
    try {
        const data = await shortUrlServices.getAll();

        return res.status(200).json({ data });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: false,
            message: error,
        });
    }
}

export async function getUrl(req, res) {
    try {
        const { slot } = req.params;

        const data = await shortUrlServices.getUrlForSlot(slot);

        if (!data)
            return res.status(404).json({ data: null, msg: "Url not found" });

        return res.status(200).json({ data });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: false,
            message: error,
        });
    }
}

export async function createUrl(req, res) {
    try {
        const { url } = req.body;

        const miUrl = new URL(url);

        if (!miUrl)
            return res
                .status(400)
                .json({ status: false, message: "No es una url" });

        const slot = new Date().getTime();
        const newUrl = {
            renameUrl: process.env.FRONTEND_URL + "/" + slot,
            urlOriginal: url,
            slotUrl: slot,
        };

        const data = await shortUrlServices.create(newUrl);

        return res.status(201).json({ status: true, data });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: false,
            message: error,
        });
    }
}

export async function deleteUrl(req, res) {
    try {
        const {
            params: { id },
        } = req;

        await shortUrlServices.delete(id);

        return res.status(201).json();
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: false,
            message: error,
        });
    }
}
