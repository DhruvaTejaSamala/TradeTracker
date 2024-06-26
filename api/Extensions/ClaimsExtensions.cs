using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace api.Extensions
{
    public static class ClaimsExtensions
    {
        public static string GetUsername(this ClaimsPrincipal user)
        {
            if (user == null) 
                throw new ArgumentNullException(nameof(user));

            var claim = user.Claims.SingleOrDefault(x => x.Type.Equals("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname"));

            if (claim == null) 
                throw new InvalidOperationException("The given name claim is not present.");

            return claim.Value;
        }
    }
}