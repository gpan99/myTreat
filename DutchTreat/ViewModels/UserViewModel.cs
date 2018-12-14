using DutchTreat.Data.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DutchTreat.ViewModels
{
  public class UserViewModel
  {
        public string Name { get; set; }
        public DateTime birthDate { get; set; }

        public string avator { get; set; }
 
        public string bio { get; set; }

        public ICollection<Note> notes { get; set; }
  }
}
