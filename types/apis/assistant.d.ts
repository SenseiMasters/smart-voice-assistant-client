enum LangEnum {
  FA = "Farsi",
  EN = "English",
}

interface ISendPrompt {
  lang: LangEnum;
  input: string;
}

interface ISpeechToText {
  lang: LangEnum;
  audio: File;
}

interface IResult {
  result: string;
}
