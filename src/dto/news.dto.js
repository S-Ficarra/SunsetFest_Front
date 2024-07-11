export class NewsDto {

    constructor(id, user, createdAt, modifiedAt, status, type, content) {
        this.id = id;
        this.user = user;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
        this.status = status;
        this.type = type;
        this.content = content;
    };
    
};