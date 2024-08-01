import { BASE_URL } from "../App";
import { ProgramDto } from "../dto/program.dto";

export const ProgramService = {

    async fetchProgramByYear (year) {
        const response = await fetch (`${BASE_URL}programs/${year}`);
        const data = await response.json();
        console.log(data);

        if (response.status === 200) {
            return new ProgramDto (
                data._id,
                data._performances
            )
        } else {
            return {response, data}; 
        };
    },

};