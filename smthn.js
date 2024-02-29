window.addEventListener('load', function() {
    document.getElementById("newsletter-box").checked = true;
  });
  // Optioanl input fields
  let freelancerElectronicBox = document.getElementById('freelancer-electronic-box');
  let freelancerAddressField = document.getElementById('input-address');
  let freelancerCodeField = document.getElementById('input-code');
  let freelancerAddresLable = document.getElementById('lable-address');
  let freelancerAddresInput = document.getElementById('wrap-address');
  let freelancerCodeLable = document.getElementById('lable-code');
  let freelancerCodeInput = document.getElementById('wrap-code');
  // Type select
  let dropDown = document.getElementById('dropdown');
  let freelancerNameLable = document.getElementById('freelancer-name-lable');
  let freelancerNameInput = document.getElementById('freelancer-name-input');
  let freelancerNameField = document.getElementById('freelancer-name-field');
  let freelancerEmailLable = document.getElementById('freelancer-email-lable');
  let freelancerEmailInput = document.getElementById('freelancer-email-input');
  let freelancerEmailField = document.getElementById('freelancer-email-field');
  let freelancerPhoneLable = document.getElementById('freelancer-phone-lable');
  let freelancerPhoneInput = document.getElementById('freelancer-phone-input');
  let freelancerPhoneField = document.getElementById('freelancer-phone-field');
  let freelancerJobtitleLable = document.getElementById('freelancer-jobtitle-lable');
  let freelancerJobtitleInput = document.getElementById('freelancer-jobtitle-input');
  let freelancerJobtitleField = document.getElementById('freelancer-jobtitle-field');
  let freelancerStudentLable = document.getElementById('freelancer-student-lable');
  let freelancerStudentInput = document.getElementById('freelancer-student-input');
  let freelancerStudentBox = document.getElementById('freelancer-student-box');
  let freelancerMotivationLable = document.getElementById('freelancer-motivation-lable');
  let freelancerMotivationInput = document.getElementById('freelancer-motivation-input');
  let freelancerMotivationField = document.getElementById('freelancer-motivation-field');
  let freelancerElectronicLable = document.getElementById('freelancer-electronic-lable');
  let freelancerElectronicInput = document.getElementById('freelancer-electronic-input');
  let companyNameLable = document.getElementById('company-name-lable');
  let companyNameInput = document.getElementById('company-name-input');
  let companyNameField = document.getElementById('company-name-field');
  let companyNumberLable = document.getElementById('company-registration-lable');
  let companyNumberInput = document.getElementById('company-registration-input');
  let companyNumberField = document.getElementById('company-registration-field');
  let companyAddressLable = document.getElementById('company-address-lable');
  let companyAddressInput = document.getElementById('company-address-input');
  let companyAddressField = document.getElementById('company-address-field');
  let companySignitureLable = document.getElementById('company-signiture-lable');
  let companySignitureInput = document.getElementById('company-signiture-input');
  let companySignitureField = document.getElementById('company-signiture-field');
  let companySignatureTitleLable = document.getElementById('company-signiture-title-lable');
  let companySignatureTitleInput = document.getElementById('company-signiture-title-input');
  let companySignatureTitleField = document.getElementById('company-signature-title-field');
  let companyContactNameLable = document.getElementById('company-contact-name-lable');
  let companyContactNameInput = document.getElementById('company-contact-name-input');
  let companyContactNameField = document.getElementById('company-contact-name-field');
  let companyContactJobtitleLable = document.getElementById('company-contact-jobtitle-lable');
  let companyContactJobtitleInput = document.getElementById('company-contact-jobtitle-input');
  let companyContactJobtitleField = document.getElementById('company-contact-jobtitle-field');
  let companyEmailLable = document.getElementById('company-email-lable');
  let companyEmailInput = document.getElementById('company-email-input');
  let companyEmailField = document.getElementById('company-email-field');
  let companyPhoneLable = document.getElementById('company-phone-lable');
  let companyPhoneInput = document.getElementById('company-phone-input');
  let companyPhoneField = document.getElementById('company-phone-field');
  let companyDescriptionLable = document.getElementById('company-description-lable');
  let companyDescriptionInput = document.getElementById('company-description-input');
  let companyDescriptionField = document.getElementById('company-description-field');
  let newsletterLable = document.getElementById("newsletter-lable");
  let newsletterInput = document.getElementById("newsletter-input");
  let newsletterBox = document.getElementById("newsletter-box");
  let isStudenChecked = false;
  let isNewsletterChecked = false;
  
  dropDown.addEventListener('change', (e) => {
    if (e.target.value == 'Pašnodarbinātais' || e.target.value == 'Privātpersona') {
      freelancerNameLable.classList.remove("hidden");
      freelancerNameInput.classList.remove("hidden");
      freelancerNameField.required = true;
      freelancerEmailLable.classList.remove("hidden");
      freelancerEmailInput.classList.remove("hidden");
      freelancerEmailField.required = true;
      freelancerPhoneLable.classList.remove("hidden");
      freelancerPhoneInput.classList.remove("hidden");
      freelancerPhoneField.required = true;
      freelancerJobtitleLable.classList.remove("hidden");
      freelancerJobtitleInput.classList.remove("hidden");
      freelancerStudentLable.classList.remove("hidden");
      freelancerStudentInput.classList.remove("hidden");
      freelancerMotivationLable.classList.remove("hidden");
      freelancerMotivationInput.classList.remove("hidden");
      freelancerElectronicLable.classList.remove("hidden");
      freelancerElectronicInput.classList.remove("hidden");
      if(isStudenChecked)
      {
        freelancerStudentBox.checked = true;
      }
      if(freelancerElectronicBox.checked)
      {
        freelancerAddresLable.classList.remove("hidden");
        freelancerAddresInput.classList.remove("hidden");
        freelancerCodeLable.classList.remove("hidden");
        freelancerCodeInput.classList.remove("hidden");
        freelancerAddressField.required = true;
        freelancerCodeField.required = true;
      }
      companyNameLable.classList.add("hidden");
      companyNameInput.classList.add("hidden");
      companyNameField.required = false;
      companyNameField.value = null;
      companyNumberLable.classList.add("hidden");
      companyNumberInput.classList.add("hidden");
      companyNumberField.required = false;
      companyNumberField.value = null;
      companyAddressLable.classList.add("hidden");
      companyAddressInput.classList.add("hidden");
      companyAddressField.required = false;
      companyAddressField.value = null;
      companySignitureLable.classList.add("hidden");
      companySignitureInput.classList.add("hidden");
      companySignitureField.required = false;
      companySignitureField.value = null;
      companySignatureTitleLable.classList.add("hidden");
      companySignatureTitleInput.classList.add("hidden");
      companySignatureTitleField.required = false;
      companyContactNameLable.classList.add("hidden");
      companyContactNameInput.classList.add("hidden");
      companyContactNameField.required = false;
      companyContactNameField.value = null;
      companyContactJobtitleLable.classList.add("hidden");
      companyContactJobtitleInput.classList.add("hidden");
      companyContactJobtitleField.required = false;
      companyContactJobtitleField.value = null;
      companyEmailLable.classList.add("hidden");
      companyEmailInput.classList.add("hidden");
      companyEmailField.required = false;
      companyEmailField.value = null;
      companyPhoneLable.classList.add("hidden");
      companyPhoneInput.classList.add("hidden");
      companyPhoneField.required = false;
      companyPhoneField.value = null;
      companyDescriptionLable.classList.add("hidden");
      companyDescriptionInput.classList.add("hidden");
      companyDescriptionField.value = null;
      if(newsletterBox.checked)
      {
        isNewsletterChecked = true;
      }
      else
      {
        isNewsletterChecked = false;
      }
      newsletterBox.checked = true;
      newsletterLable.classList.add("hidden");
      newsletterInput.classList.add("hidden");
    } else {
      freelancerNameLable.classList.add("hidden");
      freelancerNameInput.classList.add("hidden");
      freelancerNameField.required = false;
      freelancerNameField.value = null;
      freelancerEmailLable.classList.add("hidden");
      freelancerEmailInput.classList.add("hidden");
      freelancerEmailField.required = false;
      freelancerEmailField.value = null;
      freelancerPhoneLable.classList.add("hidden");
      freelancerPhoneInput.classList.add("hidden");
      freelancerPhoneField.required = false;
      freelancerPhoneField.value = null;
      freelancerJobtitleLable.classList.add("hidden");
      freelancerJobtitleInput.classList.add("hidden");
      freelancerJobtitleField.value = null;
      freelancerStudentLable.classList.add("hidden");
      freelancerStudentInput.classList.add("hidden");
      if(freelancerStudentBox.checked)
      {
        isStudenChecked = true;
      }
      else
      {
        isStudenChecked = false;
      }
      freelancerStudentBox.checked = false;
      freelancerMotivationLable.classList.add("hidden");
      freelancerMotivationInput.classList.add("hidden");
      freelancerMotivationField.value = null;
      freelancerAddressField.value = null;
      freelancerCodeField.value = null;
      companyNameLable.classList.remove("hidden");
      companyNameInput.classList.remove("hidden");
      companyNameField.required = true;
      companyNumberLable.classList.remove("hidden");
      companyNumberInput.classList.remove("hidden");
      companyNumberField.required = true;
      companyAddressLable.classList.remove("hidden");
      companyAddressInput.classList.remove("hidden");
      companyAddressField.required = true;
      companySignitureLable.classList.remove("hidden");
      companySignitureInput.classList.remove("hidden");
      companySignitureField.required = true;
      companySignatureTitleLable.classList.remove("hidden");
      companySignatureTitleInput.classList.remove("hidden");
      companySignatureTitleField.required = true;
      companyContactNameLable.classList.remove("hidden");
      companyContactNameInput.classList.remove("hidden");
      companyContactNameField.required = true;
      companyContactJobtitleLable.classList.remove("hidden");
      companyContactJobtitleInput.classList.remove("hidden");
      companyContactJobtitleField.required = true;
      companyEmailLable.classList.remove("hidden");
      companyEmailInput.classList.remove("hidden");
      companyEmailField.required = true;
      companyPhoneLable.classList.remove("hidden");
      companyPhoneInput.classList.remove("hidden");
      companyPhoneField.required = true;
      companyDescriptionLable.classList.remove("hidden");
      companyDescriptionInput.classList.remove("hidden");
      freelancerAddresLable.classList.add("hidden");
      freelancerAddresInput.classList.add("hidden");
      freelancerCodeLable.classList.add("hidden");
      freelancerCodeInput.classList.add("hidden");
      freelancerAddressField.required = false;
      freelancerCodeField.required = false;
      if(isNewsletterChecked)
      {
        newsletterBox.checked = true;
      }
      else
      {
        newsletterBox.checked = false;
      }
      newsletterLable.classList.remove("hidden");
      newsletterInput.classList.remove("hidden");
    }
  });
  
  // Optioanl input fields
  freelancerElectronicBox.addEventListener('change', (event) => {
    if(dropDown.value == 'Pašnodarbinātais' || dropDown.value == 'Privātpersona')
      {
        if (event.currentTarget.checked) {
        freelancerAddresLable.classList.remove("hidden");
        freelancerAddresInput.classList.remove("hidden");
        freelancerCodeLable.classList.remove("hidden");
        freelancerCodeInput.classList.remove("hidden");
        freelancerAddressField.required = true;
        freelancerCodeField.required = true;
      } else {
        //freelancerAddresLable.style.display = 'none';
        freelancerAddresLable.classList.add("hidden");
        freelancerAddresInput.classList.add("hidden");
        freelancerCodeLable.classList.add("hidden");
        freelancerCodeInput.classList.add("hidden");
        freelancerAddressField.required = false;
        freelancerCodeField.required = false;
      }
    }
  });
