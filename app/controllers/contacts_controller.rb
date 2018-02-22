class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    if @contact.deliver
      flash[:notice] = "#{ t('text_35') }"
    else
      flash[:error] = "#{ t('text_36') }"
    end
    redirect_to root_path(anchor: 'contact_us')
  end
end