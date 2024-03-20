import { ShortUrl } from "./short.url.model.js";

export class ShortUrlServices {
    async getAll() {
        return await ShortUrl.find();
    }

    async getUrlForSlot(slot) {
        return await ShortUrl.findOne({
            slotUrl: slot,
        });
    }

    async create(dataUrl) {
        return await ShortUrl.create(dataUrl);
    }

    async delete(idUrl) {
        return await ShortUrl.deleteOne({ _id: idUrl });
    }
}
