const { Schema, model } = require('mongoose');

const surveySchema = new Schema({
    title: {
        type: String,
        required: true,
        trim:true,
        min: [1, 'Input text should be more than 1 character'],
        max: [280,'Input text cannot exceed 280 characters'],
    },
    choice1: {
        type: String,
        required: true,
        trim:true,
        min: [1, 'Input text should be more than 1 character'],
        max: [280,'Input text cannot exceed 280 characters'],
    },
    choice2: {
        type: String,
        required: true,
        trim:true,
        min: [1, 'Input text should be more than 1 character'],
        max: [280,'Input text cannot exceed 280 characters'],
    },
    description: {
        type: String,
        required: true,
        trim:true,
    },
    choice1_votes: {
        type: Number,
        default: 0,
    },
    choice2_votes: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (date)=> {
            const dateNew = new Date(date)
            const month = dateNew.getMonth() + 1;
            const day = dateNew.getDate();
            const hour = dateNew.getHours();
            const min = dateNew.getMinutes();
            const sec = dateNew.getSeconds();
            var dateFormatted = dateNew.getFullYear() + "-" + month + "-" + day + "_" +  hour + ":" + min + ":" + sec;
            return dateFormatted;
        }
    }
},
{
    toJSON: {
    //   virtuals: true,
      getters: true,
    },
    id: false,
}
);

const Survey = model('Survey', surveySchema);

module.exports = Survey;
