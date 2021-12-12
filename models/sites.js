import mongoose from 'mongoose'

const siteSchema = new mongoose.Schema({
    name: String,
    siteType: String
}, { timestamps: true })

export default mongoose.model('Site', siteSchema)