﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ToptanciCRMApi.Domain.UnitOfWork
{
    public interface IUnitOfWork
    {
        void CompleteAsync();
    }
}