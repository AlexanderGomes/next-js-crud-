import dbConnect from '../../../utils/dbConnect'
import Note from '../../../models/note'

dbConnect();

export default async (req, res ) => {
    const {method} = req;

    switch(method) {
        case 'GET':
        try {
            const notes = await Note.find({})
            res.status(200).json({success: true, data: notes})
        } catch (error) {
            res.status(400).json({error})
        }
        break;
        case 'POST':
            try {
                const note = await Note.create(req.body)
                res.status(201).json({note})

            } catch (error) {
                console.log(error)
            }
            break;
            default: 
            res.status(400).json({success: false})
            break;
    }
    
}