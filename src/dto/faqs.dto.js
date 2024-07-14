export class FaqsDto {

    constructor(id, user, createdAt, modifiedAt, status, type, question, answer) {
        this.id = id;
        this.user = user;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
        this.status = status;
        this.type = type;
        this.question = question;
        this.answer = answer;
    };
    
};