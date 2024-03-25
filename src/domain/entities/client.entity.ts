

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
    public url_reference:string,
    public utm_campaign:string,
    public utm_content:string,
    public utm_source:string,
    public utm_term:string,
    public utm_id:string,
  ){}

  get isCompleted() {
    return !!this.names;
  }

  public static fromObject( object:{[key:string]:any} ):ClientEntity {
    const { id, names, surnames, type_document, document_number, telephone_number, email, graduation_year, city, program_course, url_reference, utm_campaign, utm_content, utm_source, utm_term, utm_id } = object;
    if ( !id || !names || !surnames || !type_document || !document_number || !telephone_number || !email || !graduation_year || !city || !program_course || !url_reference || !utm_campaign || !utm_content || !utm_source || !utm_term || !utm_id ) {
      throw 'All properties are required';
    }
    return new ClientEntity( id, names, surnames, type_document, document_number, telephone_number, email, graduation_year, city, program_course, url_reference, utm_campaign, utm_content, utm_source, utm_term, utm_id );
  }

}