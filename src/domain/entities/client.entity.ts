

export class ClientEntity {

  constructor(
    public id:number,
    public names:string,
    public surnames:string,
    public type_document:string,
    public document_number:string,
    public telephone_number:string,
    public email:string,
    public graduation_year:string,
    public city:string,
    public program_course:string,
    public completedAt?:Date|null
  ){}

  get isCompleted() {
    return !!this.names;
  }

  public static fromObject( object:{[key:string]:any} ):ClientEntity {
    const { id, names, surnames, type_document, document_number, telephone_number, email, graduation_year, city, program_course, completedAt = new Date() } = object;
    if ( !id || !names || !surnames || !type_document || !document_number || !telephone_number || !email || !graduation_year || !city || !program_course ) {
      throw 'All properties are required';
    }
    return new ClientEntity( id, names, surnames, type_document, document_number, telephone_number, email, graduation_year, city, program_course, completedAt );
  }

}