class ContactsController < ApplicationController
  def new
  @contact = Contact.new
end

def create
  @contact = Contact.new(params[:contact])
  @contact.request = request
  if @contact.deliver
    flash.now[:notice] = "#{ t('text_35') }"
  else
    flash.now[:error] = "#{ t('text_36') }"
    redirect_to root_path(anchor: 'contact_us')
  end
end
end
