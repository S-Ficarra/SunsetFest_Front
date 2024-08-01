import { ProgramService } from "../services/program.service";
import { ProgramMapper } from "../mappers/program.mapper";

export const GetProgramByYear = async (authHeader, year) => {

    let programDto = await ProgramService.fetchProgramByYear(authHeader, year)
    let programModel = ProgramMapper.transformProgramDtoToModel(programDto);

    return programModel;

};
