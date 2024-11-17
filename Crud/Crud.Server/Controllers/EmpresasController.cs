using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Crud.Server.Models;

namespace Crud.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpresasController : ControllerBase
    {
        private readonly Context _context;

        public EmpresasController(Context context)
        {
            _context = context;
        }

        // GET: api/Empresas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Empresas>>> GetEmpresas()
        {
            return await _context.Empresas.ToListAsync();
        }

        // GET: api/Empresas/search
        [HttpGet("search")]
        public async Task<ActionResult<Empresas>> GetEmpresas(string? cnpj, string? nome)
        {
            if(_context.Empresas == null)
            {
                return NotFound("Empresas não encontrada em nossa base de dados.");
            }

            if (string.IsNullOrWhiteSpace(cnpj) && string.IsNullOrWhiteSpace(nome))
            {
                return BadRequest("É necessário informar ao menos um parâmetro: CNPJ ou Nome.");
            }

            if (!string.IsNullOrWhiteSpace(cnpj))
            {
                var empresa = await _context.Empresas.FirstOrDefaultAsync(e => e.Cnpj == cnpj);
                if (empresa == null)
                {
                    return NotFound($"Nenhuma empresa encontrada com o CNPJ: {cnpj}");
                }
                return Ok(empresa); 
            }

            if (!string.IsNullOrWhiteSpace(nome))
            {
                var empresas = await _context.Empresas
                    .Where(e => EF.Functions.Like(e.Nome, $"%{nome}%"))
                    .ToListAsync();

                if (!empresas.Any())
                {
                    return NotFound($"Nenhuma empresa encontrada contendo no nome: {nome}");
                }
                return Ok(empresas); 
            }

            return BadRequest("É necessário informar ao menos um parâmetro: CNPJ ou Nome.");
        }

        // POST: api/Empresas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Empresas>> PostEmpresas(Empresas empresas)
        {
            _context.Empresas.Add(empresas);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmpresas", new { id = empresas.EmpresaId }, empresas);
        }

        // PUT: api/Empresas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmpresas(int id, Empresas empresa)
        {
            if (id != empresa.EmpresaId)
            {
                return BadRequest();
            }

            _context.Entry(empresa).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmpresaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        private bool EmpresaExists(int id)
        {
            return _context.Empresas.Any(e => e.EmpresaId == id);
        }

        // DELETE: api/Empresas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmpresas(int id)
        {
            var empresas = await _context.Empresas.FindAsync(id);
            if (empresas == null)
            {
                return NotFound();
            }

            _context.Empresas.Remove(empresas);
            await _context.SaveChangesAsync();

            return NoContent();
        }

    }
}
