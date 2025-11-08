import mongoose from "mongoose";

const bioSchema = new mongoose.Schema({
    name: {
        firt_name:{
            type : String,
        },
        last_name:{
            type : String,
        }
    },
    intro: {
        type: String,
    },
    find_me:[
        {
            platform:{
                type: String,
            },
            url:{
                type: String,
            }
        }
    ],
    contact: {
        email: {
            type: String,
        },
        phone:{
            type: String,
        }
    },
    edu:[
        {
            title:{
                type: String,
            },
            clg: {
                type: String,
            },
            start:{
                type: String,
            },
            end:{
                type: String,
            },
            place:{
                type: String,
            },
            short_place:{
                type: String,
            }
        }
    ],
    skills:{
        frontend:[String],
        backend:[String],
        DB:[String],
        version_controller:[String],
        testing:[String],
    },
    words: [String],
    feature_projects: [
        {
            company: {
                type: String,
            },
            short_intro :{
                type: String,
            },
            projects:[
                {
                    title: {
                        type: String,
                    },
                    desc:{
                        type: String,
                    }
                }
            ]
        }
    ],
    worked_at:[
        {
            company:{
                type: String,
            },
            from:{
                type: String,
            },
            to:{
                type: String,
            },
            role: {
                type: String,
            },
            work_experience: {
                type: String,
            }
        }
    ]
})


export default mongoose.model("Bio", bioSchema, "bio");