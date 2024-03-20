
export class CreateClientDto {

  private constructor(
    public readonly names:string,
    public readonly surnames:string,
    public readonly type_document:string,
    public readonly document_number:string,
    public readonly telephone_number:string,
    public readonly email:string,
    public readonly graduation_year:string,
    public readonly city:string,
    public readonly program_course:string,
    public readonly completedAt:Date
  ) {}

  static create( props:{[key:string]:any} ):[string?, CreateClientDto?] {

    const { names, surnames, type_document, document_number, telephone_number, email, graduation_year, city, program_course, completedAt } = props;

    if( !names || !surnames || !type_document || !document_number || !telephone_number || !email || !graduation_year || !city || !program_course ) { 
      return ['All properties are required', undefined];
    }

    return [undefined, new CreateClientDto( names, surnames, type_document, document_number, telephone_number, email, graduation_year, city, program_course, completedAt )];
  }

}