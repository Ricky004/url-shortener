import express from "express"
import { nanoid } from "nanoid"
import Url from "../Schema/shorturl.schema.js"
import dotenv from 'dotenv'
dotenv.config({ path: './.env' })

const router = express.Router()

router.post("/short", async (req, res) => {
    const { orignalUrl } = req.body

    const urlId = nanoid(6)
        try {
            let url = await Url.findOne({ orignalUrl })
            if (url) {
                res.json(url)
            } else {
                const shortUrl = `${process.env.BASE_URL}/${urlId}`

                url = new Url({
                    orignalUrl,
                    shortUrl,
                    urlId,
                })

                await url.save()
                res.json(url)
            }
        } catch (error) {
            console.log(err)
            res.status(500).json('Server Error')
    }
})

export default router