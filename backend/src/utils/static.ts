import { currentDate } from './date';

// types configure options chose by the user
const OPTION_1 = 'Configured and added to DB';
const OPTION_2 = 'Only figured';
const OPTION_3 = 'Only added to DB';
const BOTH_FILES_UPLOADED = 'firmware and sdk files upload at ';
const FIRMWARE_FILE_UPLOADED = 'firmwarefile uploaded at ';
const SDK_FILE_UPLOADED = 'firmwarefile uploaded at ';

//keep track of which firmware file/sdk was uploaded and when
const configuredFilesUsedAndWhen = (typesOfFiles: string[]) => {
  if (typesOfFiles.length === 2) {
    return `${BOTH_FILES_UPLOADED}${currentDate()}`;
  } else {
    if (typesOfFiles[0].includes('bin')) {
      return `${FIRMWARE_FILE_UPLOADED}${currentDate()}`;
    } else {
      return `${SDK_FILE_UPLOADED}${currentDate()}`;
    }
  }
};

export { configuredFilesUsedAndWhen, OPTION_1, OPTION_2, OPTION_3 };
